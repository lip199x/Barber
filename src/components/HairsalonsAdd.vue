<template>
  <div class="container">
    <br/> <br/>
    <div class="row">
      <div >
        <h2>เพิ่มร้านทำผม</h2> <br/>
      </div>
    </div>
    <div class="container">
        <form class="needs-validation" v-on:submit.prevent="" novalidate>
          <div class="form-group row">
              <div class="col-6">
                  <div class="form-group">
                      <label for="title">ชื่อร้านทำผม : </label>
                      <input type="text" v-model="hairsalon.hsalon_name" class="form-control" id="name" placeholder="ชื่อร้านทำผม" name="name" />
                  </div>
              </div>
          </div>
          <div class="form-group row">
              <div class="col-5">
                  <div class="form-group">
                      <label for="detail">รายละเอียดร้าน : </label>
                      <textarea v-model="hairsalon.hsalon_detail" class="form-control" id="detail" placeholder="รายละเอียดร้าน" rows="3"></textarea>
                  </div>
              </div>
              <div class="col-5">
                  <div class="form-group">
                      <label for="detail">ที่อยู่ร้าน : </label>
                      <textarea v-model="hairsalon.hsalon_address" class="form-control" id="address" placeholder="ที่อยู่ร้าน" rows="3"></textarea>
                  </div>
              </div>
          </div>
          <div class="form-group row">
              <div class="col-4">
                  <div class="form-group">
                      <label for="lat">เวลาทำการ : </label>
                      <input v-model="hairsalon.hsalon_time" type="text" class="form-control" id="time" placeholder="เวลาทำการ" name="time"/>
                  </div>
              </div>
              <div class="col-4">
                  <div class="form-group">
                      <label for="lat">รูปร้าน :</label>
                      <input v-model="hairsalon.hsalon_pic" type="text" class="form-control" id="image" placeholder="ชื่อไฟล์" name="image"/>
                  </div>
              </div>
          </div>
          <div class="form-group row">
              <div class="col-4">
                  <div class="form-group">
                      <label for="lat">ละติจูด :</label>
                      <input v-model="hairsalon.hsalon_lat" type="number" class="form-control" id="lat" placeholder="ละติจูด" name="lat"/>
                  </div>
              </div>
              <div class="col-4">
                  <div class="form-group">
                      <label for="lat">ลองติจูด :</label>
                      <input v-model="hairsalon.hsalon_lng"  type="number" class="form-control" id="lng" placeholder="ลองติจูด" name="lng"/>
                  </div>
              </div>
          </div>
           <button class="btn btn-primary" v-on:click="SaveSalons()">บันทึก</button> &nbsp;
           <button class="btn btn-danger" v-on:click="Cancel()">ยกเลิก</button>
      </form>
    </div>
    <br /><br /><br /><br />
  </div>
</template>

<script>

import moment from 'moment';
import axios from "axios";

export default {
  name: "HairsalonsAdd",
    data() {
        return {
            errors: [],
            hairsalon: {
                hsalon_name: " ",
                hsalon_detail: " ",
                hsalon_address: " ",
                hsalon_time: 1,
                hsalon_pic: " ",
                hsalon_lat: 1,
                hsalon_lng: 1
            }
        }
    },
   
  methods: {
        async SaveSalons() {
            if (confirm("Do you want to save  this book?")) {
                this.hairsalon.publishedDate = moment(String(this.hairsalon.publishedDate)).format('YYYY-MM-DD');
                // let bookimage = await this.$refs.bookimage.getFileName()
                // if (await bookimage !== "") {
                //     this.book.thumbnailUrl = await bookimage
                //     await this.$refs.bookimage.UploadImage();
                // }
                let accessToken= await localStorage.getItem('accessToken')
                if (await accessToken){
                    try {
                            await axios.post("http://localhost:3000/api/v1/" + "hairsalon/", this.hairsalon,{ headers: {"Authorization" : `bearer ${accessToken}`} });
                            await setTimeout(() => this.$router.push('/hairsalons'), 500);
                        }
                    catch{
                        this.$router.push('/');
                    }
                }else{
                    this.$router.push('/');
                }
            }
        },
    Cancel() {
      if (confirm("ต้องการยกเลิก?")) {
        this.$router.push("/");
      }
    },
  },
};

 </script>

<style scoped>
.book-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

label {
  /* Other styling... */
  font-family: 'Mitr', sans-serif;
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
input,h2{
    font-family: 'Mitr', sans-serif;
}

textarea {
    font-family: 'Mitr', sans-serif;
}


@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

</style>