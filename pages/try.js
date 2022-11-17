import React from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'


const Protected = () => {

	return <div>

		<h1>Protected Page</h1>
		{/* <div> */}
			<iframe src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=6375ddf9-ed9b-4d9b-872c-5277678674f0&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
			{/* </div> */}
		{/* <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=6375ddf9-ed9b-4d9b-872c-5277678674f0&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}
	{/* <tableau-viz id="tableauViz"       
  	src='https://public.tableau.com/shared/6Z63RT4NW?:display_count=n&:origin=viz_share_link'      
 	 device="desktop" toolbar="bottom" hide-tabs>
		</tableau-viz> */}
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

export default Protected