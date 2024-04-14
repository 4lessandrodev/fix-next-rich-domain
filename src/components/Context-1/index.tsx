import { JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import { UID } from 'rich-domain';
import CreateUser from '../../domain/factory';
import User from '../../domain/user.aggregate';
import style from '../../styles/Card.module.css';
import { Context } from 'rich-domain';
const context = Context.events();

interface Props {
	id?: UID;
	userName: string;
}

export default function Card({ id, userName }: Props): any {

	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		setUser(CreateUser({ userName, id }));
	}, [id, userName]);

	const handler = () => {
		const occurredAt = new Date().toISOString();
		context.dispatchEvent('USER:SIGNUP', user?.toObject() ?? null, occurredAt);
	}

	return (
		<div className={style.Card} onClick={() => handler()}>
			<div className={style.Header}><p>Id: {user?.id.value()}</p></div>
			<div className={style.Body}><p>Name: {user?.get('userName').get('value')}</p></div>
			<p className={style.Label}>Click to dispatch Event to USER:SIGNUP</p>
		</div>
	)
}
