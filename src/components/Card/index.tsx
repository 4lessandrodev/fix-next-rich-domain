import { useEffect, useState } from 'react';
import { UID } from 'rich-domain';
import CreateUser from '../../domain/factory';
import User from '../../domain/user.aggregate';
import '../../styles/Card.module.css';

interface Props {
	id?: UID;
	name: string;
}

export default function Card({ id, name }: Props) {

	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		setUser(CreateUser({ name, id }));
	}, [id, name])

	return (
		<div className="Card">
			<div className="Header"><p>Id: {user?.id.value()}</p></div>
			<div className="Body"><p>Name: {user?.get('name').get('value')}</p></div>
		</div>
	)
}
