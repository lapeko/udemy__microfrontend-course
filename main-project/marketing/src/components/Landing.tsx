import {Link} from "react-router-dom";

export const Landing = () => (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-4">
        <h1 className="text-center text-2xl font-bold mb-4">Landing page</h1>
        <p className="mb-4 text-gray-800 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis eaque eligendi error illum impedit odit
            quas sint sit ullam. Amet est maiores minima non nostrum, pariatur temporibus. Ab animi, beatae commodi
            culpa ipsam nostrum nulla temporibus voluptas. A ad commodi ex illo in laboriosam laborum mollitia nam
            nobis, totam!
        </p>
        <div className="flex justify-center mb-4">
            <Link to="/pricing" className="text-center px-4 py-2 bg-indigo-500 text-white rounded-md">Prices</Link>
        </div>
    </div>
)