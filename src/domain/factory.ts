import { UID } from "rich-domain";
import Name from "./user-name.value-object";
import User from "./user.aggregate";

interface Props {
	id?: UID;
	name: string;
}

export default function CreateUser(props: Props): User {
	const name = Name.create(props.name).value();
	const id = props.id;
	return User.create({ name, id }).value();
}
