| Purpose                | Full Command                          | Shortcut                    |
| ---------------------- | ------------------------------------- | --------------------------- |
| Module                 | `nest generate module users`          | `nest g mo users`           |
| Controller             | `nest generate controller users`      | `nest g co users`           |
| Service                | `nest generate service users`         | `nest g s users`            |
| Resource (CRUD module) | `nest generate resource users`        | `nest g res users`          |
| Middleware             | `nest generate middleware logger`     | `nest g mi logger`          |
| Guard                  | `nest generate guard auth`            | `nest g gu auth`            |
| Interceptor            | `nest generate interceptor logging`   | `nest g in logging`         |
| Pipe                   | `nest generate pipe validation`       | `nest g pi validation`      |
| Filter                 | `nest generate filter http-exception` | `nest g f http-exception`   |
| Decorator              | `nest generate decorator roles`       | `nest g d roles`            |
| Gateway (WebSocket)    | `nest generate gateway chat`          | `nest g ga chat`            |
| Resolver (GraphQL)     | `nest generate resolver users`        | `nest g r users`            |
| Interface              | `nest generate interface user`        | `nest g itf user`           |
| Class                  | `nest generate class dto/create-user` | `nest g cl dto/create-user` |
| Enum                   | `nest generate enum user-role`        | `nest g en user-role`       |
| Library                | `nest generate library shared`        | `nest g lib shared`         |
| Sub-app (Monorepo)     | `nest generate app api`               | `nest g app api`            |


npm run typeorm migration:generate -d -- src/database/migrations/CreateUsersTable
npm run typeorm migration:create -d -- src/database/migrations/CreateUsersTable
npm run migration:create -- src/database/migrations/CreateUsersTable

npm run typeorm migration:run
npm run typeorm migration:revert
