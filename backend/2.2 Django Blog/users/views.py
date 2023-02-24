from django.contrib import messages
from django.shortcuts import render, redirect
from .forms import UserRegisterForm


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account has been created, you are now able to log in.')
            return redirect('blog-posts')

    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})