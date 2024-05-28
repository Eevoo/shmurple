"""Tutorial string stuff"""

from typeclasses.objects import Object

class Monster(Object):
    """Monster tutorial class"""

    def move_around(self):
        """Move this monster around"""
        print(f"{self.key} is moving!")

class Dragon(Monster):
    """
    Dragon using inheritance though we will want to do composition
    """

    def move_around(self):
        """
        Lets move slightly tweaked
        """
        print(f"{self.key} flies around")

    def firebreath(self):
        """
        This is apparently a fire breathing dragon
        """
        print(f"{self.key} breathes fire")
