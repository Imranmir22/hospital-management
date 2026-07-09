export class PaginationHelper {
   
    static paginate(data,options)
    {
        const { page, perPage, total, path } = options;
        return {
            current_page : page,
            data : data,
            first_page_url : this.buildPageUrl(1, path),
            last_page_url : '',
            next_page_url : '',
            links : this.buildLinks(total, perPage, page, path),
            per_page : perPage,
            prev_page_url : '',
            total : total,
            // per_page : '',
        }
    }

    static buildPageUrl(pageNumber: number, path: string)
    {
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}page=${pageNumber}`;
    }

    static buildLinks(
    total: number,
    perPage: number,
    currentPage: number,
    path: string,
    ) {
    const totalPages = Math.ceil(total / perPage);

    return [
        {
        url: currentPage > 1 ? `${path}?page=${currentPage - 1}` : null,
        label: "Previous",
        },
        ...Array.from({ length: totalPages }, (_, index) => ({
        url: `${path}?page=${index + 1}`,
        label: String(index + 1),
        active: index + 1 === currentPage,
        })),
        {
        url:
            currentPage < totalPages
            ? `${path}?page=${currentPage + 1}`
            : null,
        label: "Next",
        },
    ];
    }
}