<template>
  <div>
    <shop :count="wantToBuy.length" class="fixed right-12 bottom-20" />
    <div
      class="w-full container mx-auto flex items-center flex-wrap pt-4 pb-12"
    >
      <nav
        class="w-full mx-auto px-14 py-3 flex flex-wrap justify-between items-center"
      >
        <button @click="$router.push('/')" class="ml-4 text-2xl">SHOP</button>
        <div class="flex items-center">
          <button
            @click="cartstate = !cartstate"
            href="#"
            class="mr-4 w-20 h-10 bg-blue-400 round-xl"
          >
            ชำระเงิน
          </button>
        </div>
      </nav>

      <div class="w-full" v-if="cartstate">
        <Price :products="wantToBuy" />
      </div>
      
      <div v-else  class="flex flex-wrap flex-row justify-center mt-4">
        <div
          class="shadow-xl m-2 mt-5 rounded-xl w-full md:w-1/3 xl:w-1/4 flex flex-col"
          v-for="(product, index) in products"
          :key="index"
        >
          <img
            class="hover:grow hover:shadow-lg h-50"
            :src="product.image"
            alt=""
          />

          <div class="p-2">
            <h2 class="text-base">{{ product.name }}</h2>

            <h2 class="mt-2 text-lg text-blue-500">
              ราคา {{ product.price }} .-
            </h2>
            <form
              class="flex mt-2"
              @submit.prevent="addProduct(product)"
              :ref="'product_' + product.id"
            >
              <input
                required
                v-model="product.count"
                value="1"
                class="w-2/3 border-2 border-blue-200"
                type="text"
                placeholder="จำนวน"
              />
              <button
                type="submit"
                class="w-1/3 rounded-xl bg-pink-500 text-white"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/static/product.json";
import shop from "@/components/shop.vue";
import _ from "lodash";
export default {
  components: { shop },

  data: () => {
    return {
      products: product,
      wantToBuy: [],
      cartstate: false,
    };
  },
  methods: {
    async addProduct(product) {
      if (this.checkProduct(product)) {
        this.wantToBuy.push(product);
      } else {
        alert("เลือกสินค้านี้แล้ว");
      }
    },

    checkProduct(product) {
      let check = _.filter(this.wantToBuy, { id: product.id });
      return check.length > 0 ? false : true;
    },
  },
};
</script>

<style></style>
