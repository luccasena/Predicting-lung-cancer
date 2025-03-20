from django.urls import path
from lungcancer.views import menu

urlpatterns = [
    path('', menu),
]