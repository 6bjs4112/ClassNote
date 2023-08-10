import Item from './Item_t';

export default function Tablet_PC({data}) {

    return (
    <div className="fig_wrap">
        {
            data.map((item, k)=>(
                <Item key={item.id} item={item}/>
            ))
        }
    </div>
  )
}
