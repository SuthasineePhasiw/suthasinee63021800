<template>
  <div>
    <div v-if="products">
      <table>
        <tr>
          <th>สินค้า</th>
          <th>จำนวน</th>
          <th>ราคา</th>
          <th>ราคารวม</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td>
            <div class="flex">
              <img class="w-14 h-14" :src="product.image" alt="" />
              <h2>{{ product.name }}</h2>
            </div>
          </td>
          <td>{{ product.count }}</td>
          <td>${{ product.price }}</td>
          <td>${{ product.price * product.count }}</td>
        </tr>
      </table>
      <h2 class="p-4 text-xl">
        ราคารวมทั้งหมด :
        <span class="font-bold text-yellow-600">${{ calculate() }} </span>
      </h2>

      <center>
        <button @click="checkout()" class="bg-green-600 p-6 text-xl text-white">
          ชำระเงิน
        </button>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      default: null,
    },
  },
  data: () => {
    return {};
  },
  methods: {
    calculate() {
      let price = 0;
      for (let index = 0; index < this.products.length; index++) {
        price += this.products[index].price * this.products[index].count;
      }
      return price;
    },
    checkout() {
      alert("ชำระเงินสำเร็จแล้ว");
      location.reload();
    },
  },
  async created() {},
};
</script>

<style>
table {
  width: 100%;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 15px;
  text-align: left;
}
#t01 tr:nth-child(even) {
  background-color: #eee;
}
#t01 tr:nth-child(odd) {
  background-color: #fff;
}
#t01 th {
  background-color: black;
  color: white;
}
</style>