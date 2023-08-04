
export default function Item_b({item}) {
    let preview = function(){
    alert(`클릭하셨군요 이것은 ${item.name}입니다.`)
    }
    return (
        <figure onClick={preview}>
            <div className="circle"><img src={item.thumb}/></div>
            <figcaption>{item.name}</figcaption>
            <figcaption>{item.price}</figcaption>
        </figure>
    )
}
