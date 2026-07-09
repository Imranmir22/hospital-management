export declare class PaginationHelper {
    static paginate(data: any, options: any): {
        current_page: any;
        data: any;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        links: ({
            url: string;
            label: string;
            active: boolean;
        } | {
            url: string;
            label: string;
        })[];
        per_page: any;
        prev_page_url: string;
        total: any;
    };
    static buildPageUrl(pageNumber: number, path: string): string;
    static buildLinks(total: number, perPage: number, currentPage: number, path: string): ({
        url: string;
        label: string;
        active: boolean;
    } | {
        url: string;
        label: string;
    })[];
}
