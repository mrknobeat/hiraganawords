import React from 'react'

export default function Footer() {
    return (
        <>

            <footer className="rounded-lg shadow m-4">
                <div className="w-full mx-auto container border-t border-divider p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-neutral-400 sm:text-center ">Created with ❤️ by mrknobeat.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-neutral-400 sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Hiragana</a>
                        </li>
         
                        <li>
                            <a href="#" className="hover:underline">Faça uma doação</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
