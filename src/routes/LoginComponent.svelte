<script>
	import { getUserDetails, auth } from '../lib/conf';
	let username = '',password = '',error = '';
	async function login() 
    {
		const user = await getUserDetails( username, password )

		if ( user ) 
        {
			$auth = user
			if ( error ) error = ''
		}
		else error = 'Incorrect username and password.'
	}

</script>

<form on:submit|preventDefault={login} class="flex mx-auto col-6">

	<div class="mb-3">
		<label for="username" class="form-label">Username</label>
		<input type="text" class="form-control" id="username" bind:value={username} />
	</div>

	<div class="mb-3">
		<label for="password" class="form-label">Password</label>
		<input type="password" class="form-control" id="password" bind:value={password} />
	</div>

	<button type="submit" class="btn btn-primary">Submit</button>
	<div id="error_message" class="text-danger">
		<small>{error}</small>
	</div>

</form>