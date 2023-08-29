export function Post({title, content}){
    return (
        <div className="card w-96 h-fit bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    )
}
