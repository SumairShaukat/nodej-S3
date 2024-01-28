 const {S3Client, GetObjectCommand} = require('@aws-sdk/client-s3');
  const getSignedUrl = require('@aws-sdk/s3-request-presigner')
 const s3client = new S3Client({
    region: '',
    Credentials: {
    accesskeyId: '',
    secretAccessKey: ''

    }
 })

 const newObject = async (key) => {
    const command = new GetObjectCommand({
        Bucket: "",
        Key: key
    })
    const url =  await S3Client(command, s3client);
    return url
 } 
 async function inti ( ) {
    console.log('get signed url from aws', newObject('graphql.jpeg'))
 }
 inti()