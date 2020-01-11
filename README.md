## Get Started

Create Docker image and container.

```
docker build -t nuxt-image .
docker run -it --name nuxt -p 80:80 -v $(pwd):/work nuxt-image sh
```

And you can see sample site in http://localhost when you run these commands in Docker's container.

```
cd app
yarn dev
```
