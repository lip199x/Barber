<template>
  <div class="container">
    <br/> <br/>
    <div class="row">
      <div >
        <h2>แก้ไขร้านทำผม</h2> <br/>
      </div>
    </div>
    <div class="container">
          <div class="form-group row">
              <div class="col-6">
                  <div class="form-group">
                      <label for="title">ชื่อร้านทำผม : </label>
                      <input type="text" v-model="hairsalon.hsalon_name" class="form-control" id="name" 
                      placeholder="ชื่อร้านทำผม" name="name" />
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
                      <input v-model="hairsalon.hsalon_lat" type="text" class="form-control" id="lat" placeholder="ละติจูด" name="lat"/>
                  </div>
              </div>
              <div class="col-4">
                  <div class="form-group">
                      <label for="lat">ลองติจูด :</label>
                      <input v-model="hairsalon.hsalon_lng" type="text" class="form-control" id="lng" placeholder="ลองติจูด" name="lng"/>
                  </div>
              </div>
          </div>
           <button class="btn btn-primary" v-on:click="SaveSalons()">บันทึก</button>&nbsp;
           <button class="btn btn-danger" v-on:click="Cancel()">ยกเลิก</button>
    </div>
    <br /><br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";


export default {
  name: "HairsalonsEdit",
  props: ["hsalon_id"],
  data() {
    return {
      hairsalon: {},
    };
  },
  methods: {
    async SaveSalons() {
      if (confirm("Do you want to save?")) {
        //Save Edited Book
        console.log(this.$route.params.hsalon_id);
        this.hairsalon.publishedDate = moment(
          String(this.hairsalon.publishedDate)
        ).format("YYYY-MM-DD");
        // let bookimage = await this.$refs.bookimage.getFileName();

        // if ((await bookimage) !== "") {
        //   this.book.thumbnailUrl = await bookimage;
        //   await this.$refs.bookimage.UploadImage();
        // }

        console.log(this.$route.params.hsalon_id);

        await axios
          .put("http://localhost:3000/api/v1/hairsalon/" + this.$route.params.hsalon_id,this.hairsalon
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });

        this.$router.push("/");
        await setTimeout(() => this.$router.push("/"), 500);
      }
    },
    Cancel() {
      if (confirm("ยกเลิกการแก้ไข ?")) {
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    const response = await axios.get(
             "http://localhost:3000/api/v1/hairsalon/" + this.$route.params.hsalon_id,
            this.hairsalon
          );
    
    
    this.hairsalon = await response.data.data[0];
    
    // var d = new Date(this.hairsalon.publishedDate);
    // this.hairsalon.publishedDate = d;
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