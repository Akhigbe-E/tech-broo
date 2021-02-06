export class Jobs {
    constructor({
        id,
        type,
        created_at,
        company,
        url,
        description,
        company_logo,
        location,
        title,
    }) {
        this.id = id
            ; (this.jobType = type), (this.companyName = company)
        this.location = location
        this.title = title
        this.createdAt = created_at
        this.companyUrl = url
        this.companyLogo = company_logo
        this.description = description
    }
}