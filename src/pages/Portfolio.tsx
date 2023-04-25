import { FC, useEffect, useState } from "react"
import { PortfolioList } from "../sections/portfolios/PortfolioList"

export const Portfolio: FC = () => {

    const [hovered, setHovered] = useState<number | null>(null)
    const handleHover = (index: number) => {
        setHovered(index)
    }
    const handleMouseLeave = () => {
        setHovered(null)

    }



    return (
        <section
            className="portfolio">
            <div
                className="portfolio-items">
                {
                    PortfolioList.map((item, index) => (
                        <div
                            className="portfolio-item"
                            key={index}>
                            <div
                                className="portfolio-item-image">
                                <img
                                    src={require(`../assets/portfolio/${item.logoPath}`)}
                                    alt={item.head} />
                            </div>
                            <div
                                className="info colorful-border">
                                <h4>Description</h4>
                                <p className="description">{item.description}</p>
                                <h4>{item.head}</h4>
                                {
                                    item.technologies.join(', ')
                                }
                            </div>
                        </div>
                    ))
                }
            </div>



        </section>

    )

}


export default Portfolio