import styled from './NotificationContainer.module.scss'
import {VscError} from 'react-icons/vsc'
import {MdErrorOutline} from 'react-icons/md'
import {AiOutlineCheckCircle, AiOutlineInfoCircle} from 'react-icons/ai'

const NotificationContainer = (props: any) => {
    return (
        <div className={styled.notification_container_body + ' ' + styled[props.type]} onClick={props.onClose}>
            {props.type === 'error' ? <VscError className={styled.notification_container_body_icon} /> : props.type === 'warning' ? <MdErrorOutline className={styled.notification_container_body_icon} /> : props.type === 'success' ? <AiOutlineCheckCircle className={styled.notification_container_body_icon} /> : <AiOutlineInfoCircle className={styled.notification_container_body_icon} />} 
            <div className={styled.notification_container_body_column}>
                {props.title.length > 0 &&
                    <h3>
                        
                        {props.title}
                    </h3>
                }
                <p>{props.message}</p>
            </div>
        </div>
    )
}
export default NotificationContainer