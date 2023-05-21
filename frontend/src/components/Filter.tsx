import {properties} from '../App'

const Filter = (props: properties) => {

    const list_items: string[] = ['Produkter', 'Producerede Produkter'];

    let activeDropdown = list_items.map((item, i) => {
        return <li key={i} className={"text-gray-700 block px-4 py-2 text-base " + (props.listActive == i ? "bg-gray-100" : "hover:bg-gray-100")} onClick={() => {
            props.setListActive(i);
        }}>{item}</li>
    });

    return (
        <div className="flex flex-wrap justify-center mt-24 space-x-10 w-full items-center px-10 row-span-2">
            <div className='flex space-x-3 items-center'>
                <label className="text-base text-gray-500 font-semibold">Kategori:</label>
                <div>
                    <div className="group inline-block">
                        <button className="outline-none focus:outline-none items-center min-w-32 inline-flex justify-center gap-x-1.5 rounded-3xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-32">
                            <span className="pr-1 font-semibold flex-1">{list_items[props.listActive]}</span>
                            <span>
                                <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </span>
                        </button>
                        <div className='transform z-20 scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-32 '>
                            <ul className="bg-white border text-center divide-y divide-gray-300 rounded-md shadow-lg mt-2">
                                {activeDropdown}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <form>
                <div className="group inline-block relative text-center">
                    <input
                        type="text"
                        id="default-search"
                        className="block p-2.5 w-58 pl-10 pr-14 z-20 text-sm bg-white shadow-sm rounded-3xl border border-gray-300 outline-none"
                        placeholder={`Søg efter...`}
                        value={props.searchQuery}
                        onChange={(e) => props.setSearchQuery(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium bg-gray-200 rounded-r-3xl border order-gray-300 hover:bg-gray-300 border-gray-400"
                    >
                        <span className="">Søg</span>
                    </button>

                </div>
            </form>
        </div>
    )
};

export default Filter;