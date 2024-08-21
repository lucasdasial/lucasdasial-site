import { Icon } from "@phosphor-icons/react";
import "./card.css";


type Props = {
    label: string;
    Icon: Icon
}

export function Card({ label, Icon }: Props) {

    return <>
        <div className='card'>
            <div className="card-content">
                <Icon weight="duotone" color="#106dc9" size={42} />
            </div>
            <hr />
            <div className="label-box ">
                <p>{label}</p>
            </div>
        </div>

    </>
}