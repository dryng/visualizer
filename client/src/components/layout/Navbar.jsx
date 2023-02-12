import Link from "next/link";
import { Fragment } from "react";

function Navbar(props) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Path Finding</Link>
                    </li>
                    <li>
                        <Link href="/">Distributed Systems</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
