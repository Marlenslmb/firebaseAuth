<template>
<div class="images-div">
    <div>
        <p>Загрузите изображение</p>
        <input type="file" @change="previewImage" accept="image/" >
    </div>
    <!-- <div>
        <p>Progress: {{uploadValue.toFixed() + "%"}}
            <progress :value="uploadValue" max="100"></progress>
        </p>
    </div> -->
    <div>
        <img class="preview" :src="picture">
        <br>
        <button @click="onUpload">Upload</button>
        <br>
        <button @click="deleteImg">Delete image</button>
    </div>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Images',
    data() {
        return{
            imageData: null,
            picture: null,
            uploadValue: 0
        }
    },
    methods: {
        previewImage(event) {
            this.uploadValue = 0;
            this.picture = null;
            this.imageData = event.target.files[0];
        },
        onUpload() {
            this.picture = null;
            const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes) * 100}, 
            error => {console.log(error.message)},
            () => {
                this.uploadValue = 100;
                storageRef.snapshot.ref.getDownloadURL()
                    .then((url) => {
                        this.picture = url; 
                    })
            }
            );
        },
        async deleteImg() {
            let storageRef = firebase.storage().ref();
            let desertRef = storageRef.child(this.imageData);
            await desertRef.delete()
        }
    }
    
}
</script>

<style scoped>

img.preview{
    width: 200px;
    height: 150px;
}
button{
    margin-top: 10px;
}
</style>