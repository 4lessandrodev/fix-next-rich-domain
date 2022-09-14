import { Entity, Result, UID } from "rich-domain";
import Name from "./user-name.value-object";

interface Props {
	id?: UID;
	name: Name;
}

export class User extends Entity<Props> {
	private constructor(props: Props) {
		super(props)
	}

	public static create(props: Props): Result<User> {
		return Result.Ok(new User(props));
	}
}

export default User;
