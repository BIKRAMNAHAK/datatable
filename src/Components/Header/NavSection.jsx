import React from 'react'
import { Link } from 'react-router-dom'

function NavSection() {
    const manus = [
        {
            name: "Home",
            path: "/"
        },{
            name: "Display",
            path: "/DisplayData"
        },
        {
            name : "Blog",
            path: "/blog"

        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    return (
        <>
            <nav>
                <ul className='d-flex justify-content-center mb-0'>
                    {

                        manus.map((item) => {
                            return (
                                <li className='list-unstyled m-0 ps-5'>
                                    <Link to={item.path} className='text-decoration-none text-black'>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

        </>
    )
}

export default NavSection
