import { Result, ValueObject } from "rich-domain";

export interface Props {
	value: string;
}

export class Name extends ValueObject<Props>{
	private constructor(props: Props) {
		super(props)
	}

	public static create(value: string): Result<Name> {
		return Result.Ok(new Name({ value }));
	}
}

export default Name;
