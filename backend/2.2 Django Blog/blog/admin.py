from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'created', 'author')
    list_filter = ('author',)
    search_fields = ('title', 'content')

