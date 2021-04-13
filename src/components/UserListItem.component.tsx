import React from "react"
import styled from "styled-components"
import { IUser } from "../types/types"

const StyledUserListItem = styled.div<{ image: string }>`
	padding: ${props => props.theme.spacing.medium};
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.main};
	}

	div.image-container {
		height: 30px;
		width: 30px;
		border-radius: 15px;
		background: url(${props => props.image});
		background-size: cover;
		margin-right: ${props => props.theme.spacing.large};
	}
`

type Props = {
	user: IUser
	goToUser(e: React.MouseEvent, id: number): void
}
const UserListItem: React.FC<Props> = ({ user, goToUser }) => {
	return (
		<StyledUserListItem
			onClick={e => goToUser(e, user.id)}
			image={user.avatar}
		>
			<div className="image-container"></div>
			{user.first_name} {user.last_name}
		</StyledUserListItem>
	)
}

export default UserListItem
