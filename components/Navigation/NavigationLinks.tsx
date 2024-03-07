interface Link {
    name: string;
}

const NavigationLinks = () => {

    const links: Link[] = [
        {name: 'Math'},
        {name: 'Physics'},
        {name: 'Statistics'},
    ]

  return (
    <>
        {
            links.map((link) => (
                <>
                    <div className="md:mb-0 mb-6 cursor-pointer hover:text-gray-500">
                        <h1 className="text-2xl md:text-sm">{link.name}</h1>
                    </div>
                </>
            ))
        }
    </>
  )
}

export default NavigationLinks