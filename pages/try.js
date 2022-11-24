import React from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'


const Protected = () => {

	return <div>

		<h1>Protected Page</h1>
	
	<tableau-viz id="tableauViz"       
  	src='https://public.tableau.com/views/enrollment_16692060529060/DIstrictPopChange?:language=en-GB&:display_count=n&:origin=viz_share_link'      
 	 device="desktop" toolbar="bottom" hide-tabs>
	</tableau-viz>

	<tableau-viz id="tableauViz"       
  	src='https://public.tableau.com/views/sss_16692137498630/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link'      
 	 device="desktop" toolbar="bottom" hide-tabs>
	</tableau-viz>
	</div>
	
	// const { push } = useRouter()
	// const { data: session, status } = useSession({
	// 	required: true,
	// 	// onUnauthenticated: () => {
	// 	// 	push('/api/auth/signin')
	// 	// },
	// })

	// if (status === 'loading') {
	// 	return <div>Loading...</div>
	// }

	// if (status === 'unauthenticated')
	// 	return <div> You are unauthenticated. this is a protected page.</div>

	// return <div>{session.user.email}</div>
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

export default Protected;