import React from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'


const Protected = () => {
	const { push } = useRouter()
	const { data: session, status } = useSession({
		required: true,
		// onUnauthenticated: () => {
		// 	push('/api/auth/signin')
		// },
	})

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'unauthenticated')
		return <div> You are unauthenticated. this is a protected page.</div>

	return <div>{session.user.email}</div>
}

// export const getServerSideProps = async (ctx) => {
// 	const session = await getSession(ctx)
//
// 	// if (!session)
// 	// 	return {
// 	// 		redirect: {
// 	// 			destination: '/auth/signin',
// 	// 		},
// 	// 	}
//
// 	return {
// 		props: { session },
// 	}
// }

export default Protected