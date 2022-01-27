<template>
  <div>
    <p>{{firstPost}}</p>
    <Tutorial />
  </div>

</template>

<script>
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default {
  name: 'IndexPage',
  async asyncData({store, error}) {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(1),
      },
      include: { author: true }
    })
    return { firstPost: post}
  },

  data(){
    return{
      firstPost:{}
    }
  },

  methods:{
    getPost(id){

    }
  }
}
</script>
