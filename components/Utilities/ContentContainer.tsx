import AsideMenu from "./AsideMenu"

interface props{
    children: JSX.Element
}

const ContentContainer = ({children}:props) => {
  return (
    <div className='max-w-[1400px] flex m-4 lg:w-[75%] lg:m-auto lg:p-6'>
        <AsideMenu/>

        <div className="w-[80%] mx-4">
        {children}
        </div>
    </div>
  )
}

export default ContentContainer