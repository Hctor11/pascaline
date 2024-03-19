interface props{
    content: string
}

const Paragraph = ({content}:props) => {
  return (
    <p className="mb-3">{content}</p>
  )
}

export default Paragraph