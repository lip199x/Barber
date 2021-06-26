<template>
<div class="book-item">
    <br />
    <div class="container ">
        <div class="row">
            <div class="col-lg-4">
                <img src="../assets/logo.png" width="200px" /><br />
            </div>
            <div class="col-lg-12">
                <div class="row">
                    <div>
                        <h2>{{hairsalon.hsalon_name}}</h2>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-2.5 d-flex justify-content-start"><b>รายละเอียดร้าน:</b></div>
                    <div class="col-5">
                        <p class="text-justify">{{hairsalon.hsalon_detail}}</p>
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-5 d-flex justify-content-start"><b>ที่อยู่ร้าน:</b></div>
                    <div>{{hairsalon.hsalon_address}}</div>
                </div>
                <div class="row">
                    <div class="col-5 d-flex justify-content-start"><b>เวลาเปิด-ปิด:</b></div>
                    <div>{{hairsalon.hsalon_time}}</div>
                </div>
                <div class="row">
                    <div class="col-5 d-flex justify-content-start"><b>รูปร้าน:</b></div>
                    <div>{{hairsalon.hsalon_pic}}</div>
                </div>
                <div class="row">
                    <div class="col-5 d-flex justify-content-start"><b>lat:</b></div>
                    <div>{{hairsalon.hsalon_lat}}</div>
                </div>
                <div class="row">
                    <div class="col-5 d-flex justify-content-start"><b>lng:</b></div>
                    <div>{{hairsalon.hsalon_lng}}</div>
                </div>
                <br />
                <button class="btn btn-primary btn-sm" @click="EditSalons(hairsalon.hsalon_id)">แก้ไข</button>&nbsp;
                <button class="btn btn-danger btn-sm" @click="DeleteSalons(hairsalon.hsalon_id)">ลบร้านทำผม</button>
                <br />
            </div>
        </div>
    </div>
    <br />
</div>
</template>

<script>
export default {
    name: "HairsalonItem",
    props: ["hairsalon"],
    methods: {
        EditSalons(hsalon_id) {
            this.$router.push('/hairsalon/' + hsalon_id);
        },
          DeleteSalons(hsalon_id) {
            if (confirm("ลบร้านทำผม ?")) {
               this.$emit('delete:hairsalon',hsalon_id);
            }
        },
    }
}
</script>

<style scoped>
.book-item {

    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
</style>
