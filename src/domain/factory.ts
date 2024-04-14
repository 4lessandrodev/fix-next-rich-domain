import { UID } from "rich-domain";
import Name from "./user-name.value-object";
import User from "./user.aggregate";

interface Props {
	id?: UID;
	userName: string;
}

export default function CreateUser(props: Props): User {
	const userName = Name.create(props.userName).value();
	const id = props.id;
	return User.create({ userName, id }).value();
}
