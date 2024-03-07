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
                    <div className="">
                        <h1 className="text-sm">{link.name}</h1>
                    </div>
                </>
            ))
        }
    </>
  )
}

export default NavigationLinks