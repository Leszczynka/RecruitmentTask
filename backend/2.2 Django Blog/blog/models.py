from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Post(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return f'{self.title} by {self.author}'

    def get_absolute_url(self):
        return reverse('blog-posts')