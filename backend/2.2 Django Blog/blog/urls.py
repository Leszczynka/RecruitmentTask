from django.urls import path
from .views import PostListView, PostCreateView

urlpatterns = [
    path('', PostListView.as_view(), name='blog-posts'),
    path('post/create/', PostCreateView.as_view(), name='post-create')
]