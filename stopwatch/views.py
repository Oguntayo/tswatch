from django.shortcuts import render,redirect
from stopwatch.models import stopwatch

# Create your views here.

def index(request):
    return render(request, "stopwatch/index.html", {
        "histories": stopwatch.objects.all()
    })
def save(request):
    if request.method== "POST":
        hour=request.POST.get("stop")
        d= stopwatch(hour=hour)
        d.save()

        return redirect("index")
     