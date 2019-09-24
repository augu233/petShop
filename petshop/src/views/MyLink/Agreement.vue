<template>
    <div class="Agreement">
        <petnavbar title="领养协议"></petnavbar>
        <div class="wrap">
            ??就腊肠犬欧弟领养事宜，达成协议如下：<br>
            ??1、甲方同意乙方把腊肠犬欧弟作为家庭成员，领养回家，期限为 个月，期满之后是否延长领养期限由双方协商决定。<br>
            ??欧弟体型特征如下：<br>
            ??品种：腊肠；性别：公；年龄：11个月；身高：20厘米左右；<br>
            ??体长：40厘米左右；体重：5公斤左右；毛色：棕色、胸部有一片白毛。<br>
            ??2、甲方保证被领养的腊肠犬欧弟身体健康，已注射过年度疫苗（国产五联针3次），和驱虫药2片。<br>
            ??3、乙方须交抵押金 元，领养期满，无任何责任事故，可领回抵押金并送还该犬；如一年内发生走失、死亡、患严重疾病、出售、遗弃等情况，押金不予退还。<br>
            ??4、乙方保证自家领养欧弟，把他（她）作为家庭成员，饲养在自己家中，不得寄养他处或转赠他人，不得遗弃和出售，如有上述行为，甲方将领回，押金不予退还。<br>
            ??5、乙方保证善待欧弟（细心喂养，按时注射疫苗；患病及时到医院治疗。）不得有嫌弃、贱视、摧残、打、骂等任何虐待的行为。如有以上行为，甲方将领回该犬，押金不予退还。<br>
            ??6、如因情况变化，乙方不能继续留养时，必须通知甲方，甲方负责将欧弟领回并视状况退还押金，乙方不得私自处理。<br>
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Agreement',
    components:{
        petnavbar,
    }
}
</script>

<style scoped>
.Agreement{
    background-color: #fff;
    height: 100vh;
}
.wrap{
    margin-top: 92px;
    margin-bottom: 100px;
    font-size: 28px;
    padding: 30px;
}
</style>
