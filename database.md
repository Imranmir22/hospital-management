users
 ├── doctor_profiles (1:1)
 ├── patient_profiles (1:1)
 └── notifications (1:many)

doctor_profiles
 ├── availability_schedules (1:many)
 │    └── schedule_slots (1:many)
 ├── leave_managements (1:many)
 └── ratings (1:many)

appointments
 ├── belongs to doctor_profiles
 ├── belongs to patient_profiles
 ├── appointment_notes (1:1)
 ├── prescriptions (1:1)
 │    └── prescription_medications (1:many)
 └── invoices (1:1)
      └── payments (1:1)

patient_profiles
 ├── medical_records (1:many)
 │    └── attachments (1:many)
 └── allergies (1:many)


## users
sqlid                  UUID PRIMARY KEY
email               VARCHAR UNIQUE NOT NULL
phone               VARCHAR UNIQUE
password            VARCHAR NOT NULL
is_active           BOOLEAN DEFAULT true
is_email_verified   BOOLEAN DEFAULT false
email_verified_at   TIMESTAMP
two_factor_secret   VARCHAR NULL
two_factor_enabled  BOOLEAN DEFAULT false
last_login_at       TIMESTAMP
created_at          TIMESTAMP
updated_at          TIMESTAMP
deleted_at          TIMESTAMP NULL  -- soft delete

## roles
sqlid          UUID PRIMARY KEY
name        VARCHAR UNIQUE   -- 'admin', 'doctor', 'patient'
created_at  TIMESTAMP

## user_has_roles
sqluser_id     UUID FK → users.id
role_id     UUID FK → roles.id
PRIMARY KEY (user_id, role_id)

## 👨‍⚕️ Doctor Side
doctor_profiles
sqlid                  UUID PRIMARY KEY
user_id             UUID UNIQUE FK → users.id
first_name          VARCHAR
last_name           VARCHAR
avatar              VARCHAR NULL        -- S3 URL
gender              ENUM(male, female, other)
dob                 DATE
specialization      VARCHAR             -- 'Cardiologist', 'Dermatologist'
qualification       VARCHAR             -- 'MBBS, MD'
experience_years    INTEGER
bio                 TEXT
consultation_fee    DECIMAL(10,2)
languages           VARCHAR[]           -- ['English', 'Urdu']
is_available        BOOLEAN DEFAULT true
is_verified         BOOLEAN DEFAULT false  -- admin verifies doctor
created_at          TIMESTAMP
updated_at          TIMESTAMP


## availability_schedules
id            UUID PRIMARY KEY
doctor_id     UUID FK → doctor_profiles.id
day_of_week   ENUM(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
start_time    TIME                -- '09:00'
end_time      TIME                -- '17:00'
slot_duration INTEGER             -- in minutes e.g. 30
is_active     BOOLEAN DEFAULT true
created_at    TIMESTAMP
updated_at    TIMESTAMP



## schedule_slots
sqlid              UUID PRIMARY KEY
doctor_id       UUID FK → doctor_profiles.id
schedule_id     UUID FK → availability_schedules.id
slot_date       DATE
start_time      TIME
end_time        TIME
status          ENUM(available, booked, blocked, completed)
created_at      TIMESTAMP
updated_at      TIMESTAMP

## leave_managements
sqlid            UUID PRIMARY KEY
doctor_id     UUID FK → doctor_profiles.id
start_date    DATE
end_date      DATE
reason        TEXT NULL
status        ENUM(pending, approved, rejected)
approved_by   UUID NULL FK → users.id   -- admin
created_at    TIMESTAMP
updated_at    TIMESTAMP

## ratings
sqlid              UUID PRIMARY KEY
doctor_id       UUID FK → doctor_profiles.id
patient_id      UUID FK → patient_profiles.id
appointment_id  UUID UNIQUE FK → appointments.id
rating          DECIMAL(2,1)    -- 1.0 to 5.0
review          TEXT NULL
created_at      TIMESTAMP
updated_at      TIMESTAMP

## 🙋 Patient Side
## patient_profiles
sqlid                   UUID PRIMARY KEY
user_id              UUID UNIQUE FK → users.id
avatar               VARCHAR NULL
gender               ENUM(male, female, other)
dob                  DATE
blood_group          ENUM(A+, A-, B+, B-, O+, O-, AB+, AB-)
emergency_phone      VARCHAR NULL
created_at           TIMESTAMP
updated_at           TIMESTAMP

## allergies
sqlid            UUID PRIMARY KEY
patient_id    UUID FK → patient_profiles.id
name          VARCHAR         -- 'Penicillin', 'Peanuts'
severity      ENUM(mild, moderate, severe)
notes         TEXT NULL
created_at    TIMESTAMP

## medical_records
sqlid              UUID PRIMARY KEY
patient_id      UUID FK → patient_profiles.id
recorded_by     UUID FK → users.id    -- doctor who created it
record_type     ENUM(diagnosis, lab_report, scan, surgery, vaccination, other)
title           VARCHAR
description     TEXT
recorded_at     DATE
created_at      TIMESTAMP
updated_at      TIMESTAMP

## attachments
sqlid              UUID PRIMARY KEY
medical_record_id  UUID FK → medical_records.id
file_name       VARCHAR
file_url        VARCHAR       -- S3 URL
file_type       VARCHAR       -- 'application/pdf', 'image/jpeg'
file_size       INTEGER       -- in bytes
uploaded_by     UUID FK → users.id
created_at      TIMESTAMP

## 📅 Appointments
appointments
sqlid              UUID PRIMARY KEY
doctor_id       UUID FK → doctor_profiles.id
patient_id      UUID FK → patient_profiles.id
slot_id         UUID UNIQUE FK → schedule_slots.id
type            ENUM(in_person, virtual)
status          ENUM(pending, confirmed, in_progress, completed, cancelled, no_show)
reason          TEXT                  -- why patient is visiting
meeting_url     VARCHAR NULL          -- for virtual appointments
cancelled_by    UUID NULL FK → users.id
cancel_reason   TEXT NULL
scheduled_at    TIMESTAMP
created_at      TIMESTAMP
updated_at      TIMESTAMP

## appointment_notes
sqlid              UUID PRIMARY KEY
appointment_id  UUID UNIQUE FK → appointments.id
doctor_id       UUID FK → doctor_profiles.id
notes           TEXT              -- private doctor notes
created_at      TIMESTAMP
updated_at      TIMESTAMP

## 💊 Prescriptions
prescriptions
sqlid              UUID PRIMARY KEY
appointment_id  UUID UNIQUE FK → appointments.id
doctor_id       UUID FK → doctor_profiles.id
patient_id      UUID FK → patient_profiles.id
diagnosis       TEXT
instructions    TEXT NULL         -- general instructions e.g. 'rest, drink water'
follow_up_date  DATE NULL
created_at      TIMESTAMP
updated_at      TIMESTAMP

## prescription_medications
sqlid               UUID PRIMARY KEY
prescription_id  UUID FK → prescriptions.id
medicine_name    VARCHAR
dosage           VARCHAR     -- '500mg'
frequency        VARCHAR     -- 'Twice a day'
duration         VARCHAR     -- '7 days'
route            ENUM(oral, injection, topical, inhalation)
notes            TEXT NULL   -- 'Take after meal'
created_at       TIMESTAMP

## 💳 Billing
invoices
sqlid                UUID PRIMARY KEY
appointment_id    UUID UNIQUE FK → appointments.id
patient_id        UUID FK → patient_profiles.id
doctor_id         UUID FK → doctor_profiles.id
subtotal          DECIMAL(10,2)
discount          DECIMAL(10,2) DEFAULT 0
tax               DECIMAL(10,2) DEFAULT 0
total             DECIMAL(10,2)
status            ENUM(draft, sent, paid, refunded, cancelled)
due_date          DATE
pdf_url           VARCHAR NULL    -- generated PDF stored in S3
created_at        TIMESTAMP
updated_at        TIMESTAMP

## payments
sqlid                  UUID PRIMARY KEY
invoice_id          UUID UNIQUE FK → invoices.id
patient_id          UUID FK → patient_profiles.id
amount              DECIMAL(10,2)
method              ENUM(card, cash, bank_transfer)
status              ENUM(pending, completed, failed, refunded)
transaction_id      VARCHAR NULL    -- Stripe transaction ID
gateway_response    JSONB NULL      -- raw Stripe response
paid_at             TIMESTAMP NULL
created_at          TIMESTAMP
updated_at          TIMESTAMP

## 🔔 Notifications & Audit
notifications
sqlid          UUID PRIMARY KEY
user_id     UUID FK → users.id
type        VARCHAR     -- 'appointment_reminder', 'prescription_ready'
title       VARCHAR
message     TEXT
data        JSONB NULL  -- any extra context { appointment_id: '...' }
is_read     BOOLEAN DEFAULT false
read_at     TIMESTAMP NULL
created_at  TIMESTAMP

## audit_logs
sqlid            UUID PRIMARY KEY
user_id       UUID NULL FK → users.id   -- who did it
entity        VARCHAR                   -- 'medical_records', 'prescriptions'
entity_id     UUID                      -- which record
action        ENUM(created, updated, deleted, viewed)
old_data      JSONB NULL                -- before change
new_data      JSONB NULL                -- after change
ip_address    VARCHAR NULL
user_agent    VARCHAR NULL
created_at    TIMESTAMP