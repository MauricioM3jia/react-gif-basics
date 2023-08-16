

export const GifItem = ({title,url,id}) => {
  console.log(`soy el log`,url)
  return (
    <div className="card">

        <img src={url} alt={title} />
        <p>{title}</p>

    </div>
  )
}
