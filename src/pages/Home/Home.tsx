import {useState, useRef} from 'react'
import NotificationContainer from '../../components/NotificationContainer/NotificationContainer'
import styled from './Home.module.scss'
interface NotificationProps {
    id: number,
    type: string,
    position: string,
    title: string,
    message: string,
    onClose(id: number): void
}

const pos = [
    'top-left', 'top-center', 'top-right',
    'bottom-left', 'bottom-center', 'bottom-right'
]
const types = [
    'success', 'info', 'warning', 'error'
]

const Home = () => {
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [position, setPosition] = useState<string>('top-left')
    const [type, setType] = useState<string>('success')
    const [notifications, setNotifications] = useState<NotificationProps[]>([])
    const onClose = (id: number) => {
        setNotifications(prevState => prevState.filter(filter => filter.id !== id))
    }
    const ref = useRef<any>({})
    const handleNotif = (type: string, position: string, title: string, text: string) => {
        if(text.length < 5) {
            handleNotif('error', 'top-right', '', 'The message must have 5 characters.')
            return;
        }
        let id = Math.floor(Math.random() * 999)
         setNotifications((prevState) => [...prevState, {id: id, type: type, position: position, title: title, message: text, onClose: () => onClose(id)}])
        ref.current[id] = setTimeout(() => {
            onClose(id)
            clearTimeout(ref.current[id])
        }, 3000)    
    }
    return (
        <div className={styled.notifications}>
            <div className={styled.notification}>
                <label htmlFor='text'>Notification title</label>
                <input type='text' id='text' name='text' onChange={(e) => setTitle((e.target as HTMLInputElement)?.value) } placeholder='Put your text here' />
                <label htmlFor='text'>Notification text</label>
                <input type='text' id='text' name='text' onChange={(e) => setText((e.target as HTMLInputElement)?.value) } placeholder='Put your text here' />
                <h2>Position</h2>
                <div className={styled.notification_items}>
                    {
                        pos.map((p, index) => 
                            <div key={index} className={styled.notification_items_group}>
                                <input defaultChecked={p === position} type='radio' id={p} onChange={(e) => setPosition((e.target as HTMLInputElement)?.value) } name='position'  value={p} />
                                <label htmlFor={p}>{p}</label>
                            </div>
                        )
                    }
                </div>
                <h2>Type</h2>
                <div className={styled.notification_items}>
                    {
                        types.map((t, index) =>
                            <div key={index} className={styled.notification_items_group}>
                                <input type='radio' defaultChecked={t === type} id={t} onChange={(e) => setType((e.target as HTMLInputElement)?.value) } value={t} name='type' />
                                <label htmlFor={t}>{t}</label>
                            </div>
                            
                        )
                    }
                </div>
                <button onClick={() => handleNotif(type, position, title, text)}>Test notification</button>
            </div>
            {notifications.length > 0 ?
                <>
                    {
                        notifications.filter(el => el.position === 'top-left').length > 0 &&
                        <div className={styled.notification_container} data-position='top-left'>
                            {
                                notifications.filter(el => el.position === 'top-left').map(({id, type, position, title, message, onClose}) =>
                                    <NotificationContainer key={id} id={id} type={type} position={position} title={title} onClose={onClose} message={message}/>
                                )
                            }
                        </div>  
                    } 
                    {
                        notifications.filter(el => el.position === 'top-center').length > 0 &&
                        <div className={styled.notification_container} data-position='top-center'>
                            {
                                notifications.filter(el => el.position === 'top-center').map(({id, type, position, title, message, onClose}) =>
                                    <NotificationContainer key={id} id={id} type={type} position={position} title={title} onClose={onClose} message={message}/>
                                )
                            }
                        </div>  
                    }
                    {
                        notifications.filter(el => el.position === 'top-right').length > 0 &&
                        <div className={styled.notification_container} data-position='top-right'>
                            {
                                notifications.filter(el => el.position === 'top-right').map(({id, type, position, title, message, onClose}) =>
                                    <NotificationContainer key={id} id={id} type={type} position={position} title={title} onClose={onClose} message={message}/>
                                )
                            }
                        </div>  
                    }
                    {
                        notifications.filter(el => el.position === 'bottom-left').length > 0 &&
                        <div className={styled.notification_container} data-position='bottom-left'>
                            {
                                notifications.filter(el => el.position === 'bottom-left').map(({id, type, position, title, message, onClose}) =>
                                    <NotificationContainer key={id} id={id} type={type} position={position} title={title} onClose={onClose} message={message}/>
                                )
                            }
                        </div>  
                    } 
                    {
                        notifications.filter(el => el.position === 'bottom-center').length > 0 &&
                        <div className={styled.notification_container} data-position='bottom-center'>
                            {
                                notifications.filter(el => el.position === 'bottom-center').map(({id, type, position, title, message, onClose}) =>
                                    <NotificationContainer key={id} id={id} type={type} position={position} title={title} onClose={onClose} message={message}/>
                                )
                            }
                        </div>  
                    }
                    {
                        notifications.filter(el => el.position === 'bottom-right').length > 0 &&
                        <div className={styled.notification_container} data-position='bottom-right'>
                            {
                                notifications.filter(el => el.position === 'bottom-right').map(({id, type, position, title, message, onClose}) =>
                                    <NotificationContainer key={id} id={id} type={type} position={position} title={title} onClose={onClose} message={message}/>
                                )
                            }
                        </div>  
                    }
                </>
            : ''}
            <div className={styled.copyright}>
                <p>Copyright &copy; <a href='https://petregabriel.online'>Petre Gabriel</a></p>
            </div>
        </div>
    )
}


export default Home

