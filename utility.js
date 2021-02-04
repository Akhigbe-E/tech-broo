export class Jobs {
    constructor({
        id,
        type,
        created_at,
        company,
        company_url,
        company_logo,
        location,
        title,
    }) {
        this.id = id
            ; (this.jobType = type), (this.companyName = company)
        this.location = location
        this.title = title
        this.createdAt = created_at
        this.companyUrl = company_url
        this.companyLogo = company_logo
    }
}