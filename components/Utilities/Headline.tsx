interface props{
    headline: string,
}

const Headline = ({headline}:props) => {
  return (
    <>
        <h1 className="font-semibold text-2xl">{headline}</h1>
    </>
  )
}

export default Headline