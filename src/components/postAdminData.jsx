import axios from "axios";

const PostData = (props) => {

	let err = props.error,
		data = props.data;

	console.log(err);
	console.log(data);

	if(Object.keys(err).length < 0) {
		axios({
			method: 'post',
			url: 'https://bookstoreappapi.herokuapp.com/api/v1/admin',
			data: data
		})
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		})
	} else {
		console.log('request not successful');
	}

	return (null);
	
}

export default PostData;