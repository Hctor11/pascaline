interface props{
    content: string
}

const Paragraph = ({content}:props) => {
  return (
    <p className="mb-3 md:pr-10 text-pretty">{content}</p>
  )
}

export default Paragraph