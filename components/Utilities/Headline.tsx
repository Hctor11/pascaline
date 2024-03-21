interface props{
    headline: string,
}

const Headline = ({headline}:props) => {
  return (
    <>
        <h2 className="font-semibold text-2xl">{headline}</h2>
    </>
  )
}

export default Headline